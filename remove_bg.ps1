Add-Type -AssemblyName System.Drawing
$inPath = "c:\Users\dhire\OneDrive\Desktop\Web_sprint\unnamed.jpg"
$outPath = "c:\Users\dhire\OneDrive\Desktop\Web_sprint\miles_transparent.png"

$img = [System.Drawing.Bitmap]::FromFile($inPath)
$bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $img.Width; $x++) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        $c = $img.GetPixel($x, $y)
        # Background is white / near-white
        if ($c.R -gt 220 -and $c.G -gt 220 -and $c.B -gt 220) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } elseif ($c.R -gt 195 -and $c.G -gt 195 -and $c.B -gt 195) {
            $minVal = [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
            $alpha = [int](255 - (($minVal - 195) / 25.0) * 255)
            if ($alpha -lt 0) { $alpha = 0 }
            if ($alpha -gt 255) { $alpha = 255 }
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        } else {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B))
        }
    }
}

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$bmp.Dispose()
Write-Output "Successfully saved transparent PNG to $outPath"
