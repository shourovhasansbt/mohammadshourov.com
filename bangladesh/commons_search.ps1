param([string]$Sites, [int]$Limit = 15)
$SiteList = $Sites -split '\|'
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

foreach ($s in $SiteList) {
  $q = [uri]::EscapeDataString($s)
  $u = "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=$q&srnamespace=6&format=json&srlimit=$Limit"
  Write-Output "===== $s ====="
  $r = Get-Api $u
  if ($null -eq $r) { Write-Output "  ERR: failed" }
  else {
    foreach ($it in $r.query.search) { Write-Output ("  " + $it.title) }
  }
  Start-Sleep -Seconds 4
}
