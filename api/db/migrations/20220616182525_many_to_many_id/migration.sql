/*
  Warnings:

  - The primary key for the `UserLikesComment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `QuestionIsInCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserIsInGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserLikesAnswer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserLikesQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserHasBadges` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `UserLikesComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `QuestionIsInCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `UserIsInGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `UserLikesAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `UserLikesQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `UserHasBadges` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserLikesComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    CONSTRAINT "UserLikesComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLikesComment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserLikesComment" ("action", "dateTime", "questionId", "userId") SELECT "action", "dateTime", "questionId", "userId" FROM "UserLikesComment";
DROP TABLE "UserLikesComment";
ALTER TABLE "new_UserLikesComment" RENAME TO "UserLikesComment";
CREATE UNIQUE INDEX "UserLikesComment_userId_questionId_key" ON "UserLikesComment"("userId", "questionId");
CREATE TABLE "new_QuestionIsInCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "questionId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "QuestionIsInCategory_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "QuestionIsInCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_QuestionIsInCategory" ("categoryId", "questionId") SELECT "categoryId", "questionId" FROM "QuestionIsInCategory";
DROP TABLE "QuestionIsInCategory";
ALTER TABLE "new_QuestionIsInCategory" RENAME TO "QuestionIsInCategory";
CREATE UNIQUE INDEX "QuestionIsInCategory_questionId_categoryId_key" ON "QuestionIsInCategory"("questionId", "categoryId");
CREATE TABLE "new_UserIsInGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "timeJoined" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserIsInGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserIsInGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserIsInGroup" ("groupId", "timeJoined", "userId") SELECT "groupId", "timeJoined", "userId" FROM "UserIsInGroup";
DROP TABLE "UserIsInGroup";
ALTER TABLE "new_UserIsInGroup" RENAME TO "UserIsInGroup";
CREATE UNIQUE INDEX "UserIsInGroup_userId_groupId_key" ON "UserIsInGroup"("userId", "groupId");
CREATE TABLE "new_UserLikesAnswer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "action" INTEGER NOT NULL,
    "answerId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserLikesAnswer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLikesAnswer_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserLikesAnswer" ("action", "answerId", "dateTime", "userId") SELECT "action", "answerId", "dateTime", "userId" FROM "UserLikesAnswer";
DROP TABLE "UserLikesAnswer";
ALTER TABLE "new_UserLikesAnswer" RENAME TO "UserLikesAnswer";
CREATE UNIQUE INDEX "UserLikesAnswer_userId_answerId_key" ON "UserLikesAnswer"("userId", "answerId");
CREATE TABLE "new_UserLikesQuestion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "action" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserLikesQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLikesQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserLikesQuestion" ("action", "dateTime", "questionId", "userId") SELECT "action", "dateTime", "questionId", "userId" FROM "UserLikesQuestion";
DROP TABLE "UserLikesQuestion";
ALTER TABLE "new_UserLikesQuestion" RENAME TO "UserLikesQuestion";
CREATE UNIQUE INDEX "UserLikesQuestion_userId_questionId_key" ON "UserLikesQuestion"("userId", "questionId");
CREATE TABLE "new_UserHasBadges" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "badgeId" INTEGER NOT NULL,
    "dateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserHasBadges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserHasBadges_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserHasBadges" ("badgeId", "dateTime", "userId") SELECT "badgeId", "dateTime", "userId" FROM "UserHasBadges";
DROP TABLE "UserHasBadges";
ALTER TABLE "new_UserHasBadges" RENAME TO "UserHasBadges";
CREATE UNIQUE INDEX "UserHasBadges_userId_badgeId_key" ON "UserHasBadges"("userId", "badgeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
