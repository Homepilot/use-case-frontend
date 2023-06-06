-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "landlord_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "surface" INTEGER NOT NULL,
    "furnished" BOOLEAN NOT NULL,
    "rent_amount" INTEGER NOT NULL,
    "photo_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Landlord" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Landlord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_landlord_id_fkey" FOREIGN KEY ("landlord_id") REFERENCES "Landlord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
