/*
  Warnings:

  - You are about to drop the column `status` on the `Book` table. All the data in the column will be lost.
  - Added the required column `status` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "status" BOOLEAN NOT NULL;
