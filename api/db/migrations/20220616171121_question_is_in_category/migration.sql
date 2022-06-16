/*
  Warnings:

  - You are about to drop the `questionIsInCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "questionIsInCategory";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "QuestionIsInCategory" (
    "questionId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("questionId", "categoryId"),
    CONSTRAINT "QuestionIsInCategory_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "QuestionIsInCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
