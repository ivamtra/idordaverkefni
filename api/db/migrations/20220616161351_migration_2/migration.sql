/*
  Warnings:

  - You are about to alter the column `action` on the `UserLikesComment` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `action` on the `UserLikesQuestion` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `action` on the `UserLikesAnswer` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- CreateTable
CREATE TABLE "questionIsInCategory" (
    "questionId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("questionId", "categoryId"),
    CONSTRAINT "questionIsInCategory_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "questionIsInCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserLikesComment" (
    "action" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "questionId"),
    CONSTRAINT "UserLikesComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLikesComment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserLikesComment" ("action", "dateTime", "questionId", "userId") SELECT "action", "dateTime", "questionId", "userId" FROM "UserLikesComment";
DROP TABLE "UserLikesComment";
ALTER TABLE "new_UserLikesComment" RENAME TO "UserLikesComment";
CREATE TABLE "new_UserLikesQuestion" (
    "userId" INTEGER NOT NULL,
    "action" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "questionId"),
    CONSTRAINT "UserLikesQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLikesQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserLikesQuestion" ("action", "dateTime", "questionId", "userId") SELECT "action", "dateTime", "questionId", "userId" FROM "UserLikesQuestion";
DROP TABLE "UserLikesQuestion";
ALTER TABLE "new_UserLikesQuestion" RENAME TO "UserLikesQuestion";
CREATE TABLE "new_UserLikesAnswer" (
    "userId" INTEGER NOT NULL,
    "action" INTEGER NOT NULL,
    "answerId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "answerId"),
    CONSTRAINT "UserLikesAnswer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLikesAnswer_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserLikesAnswer" ("action", "answerId", "dateTime", "userId") SELECT "action", "answerId", "dateTime", "userId" FROM "UserLikesAnswer";
DROP TABLE "UserLikesAnswer";
ALTER TABLE "new_UserLikesAnswer" RENAME TO "UserLikesAnswer";
CREATE TABLE "new_Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "other_info" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" INTEGER,
    CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("categoryId", "createdAt", "definition", "id", "language", "other_info", "title", "userId") SELECT "categoryId", "createdAt", "definition", "id", "language", "other_info", "title", "userId" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
