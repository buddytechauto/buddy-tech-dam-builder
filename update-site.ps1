# GitHub Update Script (PowerShell - Recommended)
# Save this file as "update-site.ps1"

# --- INSTRUCTIONS ---
# 1. Save this code in your project's root folder (buddy-tech-dam-builder) as `update-site.ps1`.
# 2. In VS Code, open the terminal (Ctrl+`).
# 3. If your terminal is not already PowerShell, type `powershell` and press Enter.
# 4. You may need to allow scripts to run. If you get an error, run this command once:
#    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
# 5. To run the script, type `.\update-site.ps1` and press Enter.

# --- SCRIPT START ---

# Write a message to the console indicating the script has started.
Write-Host "🚀 Starting BuddyTech website update..."

# Set the commit message to include the current date and time.
# You can customize the format inside the quotes.
$commitMessage = "Automated update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Navigate to your project directory.
# Note: This script assumes you run it from the root of your project folder.
# If you run it from somewhere else, uncomment the line below.
# cd C:\Users\tyson\OneDrive\Documents\buddytech\Website\Code\buddy-tech-dam-builder

try {
    # Step 1: Pull the latest changes from the 'main' branch to avoid conflicts.
    Write-Host "Step 1/5: Pulling latest changes from GitHub..."
    git pull origin main
    if ($LASTEXITCODE -ne 0) { throw "Git pull failed!" }

    # Step 2: Run the build process to compile your website assets.
    Write-Host "Step 2/5: Building the application with NPM..."
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "NPM build failed!" }

    # Step 3: Add all new and changed files to the staging area.
    Write-Host "Step 3/5: Staging all changes..."
    git add .
    if ($LASTEXITCODE -ne 0) { throw "Git add failed!" }

    # Step 4: Commit the changes with the automated message.
    Write-Host "Step 4/5: Committing changes with message: `"$commitMessage`""
    git commit -m $commitMessage
    if ($LASTEXITCODE -ne 0) { throw "Git commit failed! (This might be okay if there were no changes to commit)" }

    # Step 5: Push the changes to your GitHub repository.
    Write-Host "Step 5/5: Pushing changes to GitHub..."
    git push origin main
    if ($LASTEXITCODE -ne 0) { throw "Git push failed!" }

    Write-Host "✅ Update complete! Your changes are live on GitHub."

} catch {
    # If any command fails, the script will stop and show an error.
    Write-Host "❌ An error occurred: $_"
    Write-Host "Script stopped. Please review the error message above."
}

# --- SCRIPT END ---
