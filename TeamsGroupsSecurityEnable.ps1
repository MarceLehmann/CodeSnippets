# Install the AzureAD module
Install-Module AzureAD -Force -AllowClobber

# Connect to AzureAD
Connect-AzureAD

# Define the ObjectID variable
$ObjectID = Read-Host "Please enter the GroupID"

# Retrieve group details based on the ObjectID
Get-AzureADGroup -ObjectId $ObjectID | Select-Object *

# Enable security for the group
Set-AzureADGroup -ObjectId $ObjectID -SecurityEnabled $True
