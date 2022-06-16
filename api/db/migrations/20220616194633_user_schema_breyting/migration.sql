-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roles" TEXT NOT NULL DEFAULT 'user',
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "imageUrl" TEXT
);
INSERT INTO "new_User" ("createdAt", "email", "hashedPassword", "id", "imageUrl", "name", "resetToken", "resetTokenExpiresAt", "roles", "salt") SELECT "createdAt", "email", "hashedPassword", "id", "imageUrl", "name", "resetToken", "resetTokenExpiresAt", "roles", "salt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
