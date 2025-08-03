-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_UserName_key" ON "public"."User"("UserName");
