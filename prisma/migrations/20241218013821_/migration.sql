/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `employees_cpf_key` ON `employees`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `users_cpf_key` ON `users`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);