/*
  Warnings:

  - You are about to alter the column `sector` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to alter the column `priority` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `status` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `ticket` MODIFY `sector` ENUM('TI', 'RH', 'PRODUCAO', 'LOGISTICA') NOT NULL,
    MODIFY `priority` ENUM('BAIXA', 'MEDIA', 'ALTA') NOT NULL,
    MODIFY `status` ENUM('ABERTO', 'EM_ANDAMENTO', 'FINALIZADO') NULL;
