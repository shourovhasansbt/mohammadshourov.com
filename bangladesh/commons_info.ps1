param([string]$Titles, [int]$Width = 1200)
$UA = 'HeritageSiteResearch/1.0 (heritage photo verification; local research) PowerShell/5.1'

function Get-Api([string]$uri) {
  for ($i = 0; $i -lt 6; $i++) {
    try {
      return Invoke-RestMethod -Uri $uri -UseBasicParsing -TimeoutSec 45 -Headers @{ 'User-Agent' = $UA; 'Accept' = 'application/json' }
    } catch {
      Start-Sleep -Seconds ([math]::Pow(2, $i) + 2)
    }
  }
  return $null
}

foreach ($t in ($Titles -split '\|')) {
  $q = [uri]::EscapeDataString($t)
  $u = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Csize%7Cextmetadata&iiurlwidth=$Width&titles=$q"
  $r = Get-Api $u
  if ($null -eq $r) { Write-Output "TITLE: $t"; Write-Output "  ERR failed"; Start-Sleep -Seconds 3; continue }
  foreach ($p in $r.query.pages.PSObject.Properties) {
    $pg = $p.Value
    Write-Output "TITLE: $($pg.title)"
    if ($pg.PSObject.Properties.Name -contains 'missing') { Write-Output "  MISSING"; continue }
    $ii = $pg.imageinfo
    if ($null -eq $ii) { Write-Output "  NOIMAGEINFO"; continue }
    $ii = $ii[0]
    $em = $ii.extmetadata
    Write-Output "  WIDTH: $($ii.width) HEIGHT: $($ii.height)"
    Write-Output "  FILEURL: $($ii.url)"
    Write-Output "  THUMBURL: $($ii.thumburl)"
    Write-Output "  PAGE: https://commons.wikimedia.org/wiki/$([uri]::EscapeDataString($pg.title))"
    Write-Output "  DESCURL: $($ii.descriptionurl)"
    foreach ($k in 'Artist','Credit','LicenseShortName','UsageTerms','LicenseUrl','License','Restrictions','Permission') {
      if ($em.PSObject.Properties.Name -contains $k) {
        $v = $em.$k.value -replace '<[^>]+>', '' -replace '&amp;','&' -replace '&quot;','"' -replace '&#039;',"'"
        $v = ($v -replace '\s+', ' ').Trim()
        Write-Output "  ${k}: $v"
      }
    }
  }
  Start-Sleep -Seconds 3
}
