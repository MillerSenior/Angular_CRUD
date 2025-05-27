#!/bin/bash

# Function to update Angular and commit changes
update_angular() {
    VERSION=$1
    echo "Updating to Angular $VERSION..."
    ng update @angular/core@$VERSION @angular/cli@$VERSION --force
    git add .
    git commit -m "Updated to Angular $VERSION"
}

# Update to remaining versions sequentially
update_angular 11
update_angular 12
update_angular 13
update_angular 14
update_angular 15
update_angular 16
update_angular 17 