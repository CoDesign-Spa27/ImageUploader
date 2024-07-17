rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
   match /databases/{database}/documents {
    match /recipes/{recipeId} {
      allow read, write: if request.auth != null;
    }
  }
  match /b/{bucket}/o {
    match /images/{imageId} {
      allow read, write: if request.auth != null;
    }
  } 
  
    match /databases/{database}/documents {
    match /recipes/{recipeId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
  
    match /databases/{database}/documents {
    match /users/{userId}/favorites/{favoriteId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
 