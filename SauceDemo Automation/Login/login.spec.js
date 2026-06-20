// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
  await page.goto('https://www.saucedemo.com/')
})

test('Cenário 01 - Login com usuário válido', async ({page})=>{

  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

})
test('Cenário 02 - Login com usuário bloqueado',async({page})=>{

  await page.locator('[data-test="username"]').fill('locked_out_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.')

})
test('Cenário 03 - Login com problem_user',async({page})=>{

  await page.locator('[data-test="username"]').fill('problem_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

})
test('Cenário 04 - Login com performance_glitch_user',async({page})=>{

  await page.locator('[data-test="username"]').fill('performance_glitch_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

})
test('Cenário 05 - Login com error_user',async({page})=>{

  await page.locator('[data-test="username"]').fill('error_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

})
test('Cenário 06 - Login com visual_user',async({page})=>{

  await page.locator('[data-test="username"]').fill('visual_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()

})
test('Cenário 07 - Usuário inexistente',async({page})=>{
  await page.locator('[data-test="username"]').fill('usuario_invalido')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 08 - Senha incorreta',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('senha_errada')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 09 - Usuario vazio',async({page})=>{
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required')
})
test('Cenário 10 - Senha vazia',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required')
})
test('Cenário 11 - Ambos campos vazios',async({page})=>{
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required')
})
test('Cenário 12 - Usuario com espaço no inicio',async({page})=>{
  await page.locator('[data-test="username"]').fill(' standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 13 - Usuario com espaço no final',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user ')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 14 - Senha com espaços extras',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill(' secret_sauce ')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 15 -  Usuário em maiúsculas',async({page})=>{
  await page.locator('[data-test="username"]').fill('STANDARD_USER')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 16 -  Senha em maiúsculas',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('SECRET_SAUCE')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 17 -  Usuário em maiúsculas',async({page})=>{
  await page.locator('[data-test="username"]').fill('@#$%')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 18 -  Usuário em maiúsculas',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('@#$%')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 19 -  SQL Injection no usuário',async({page})=>{
  await page.locator('[data-test="username"]').fill("' OR '1'='1")
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 20 -  SQL Injection na senha',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill("' OR '1'='1")
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 21 - Script no usuário',async({page})=>{
  await page.locator('[data-test="username"]').fill("<script>alert('x')</script>")
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 22 - Script no usuário',async({page})=>{
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill("<script>alert('x')</script>")
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 23 - Botao de login visivel',async({page})=>{
  await expect(page.locator('[data-test="login-button"]')).toBeVisible()
})
test('Cenário 24 - Campo Username visível',async({page})=>{
  await expect(page.locator('[data-test="username"]')).toBeVisible()
})
test('Cenário 25 - Campo Password visível',async({page})=>{
  await expect(page.locator('[data-test="password"]')).toBeVisible()
})
test('Cenário 26 - Login após limpar os campos', async ({page})=>{

  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="username"]').clear()
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="password"]').clear()
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required')
})
test('Cenário 27 - Usuário com mais de 100 caracteres', async ({page})=>{
  await page.locator('[data-test="username"]').fill('usuario_teste_abcdefghijklmnopqrstuvwxyz_ABCDEFGHIJKLMNOPQRSTUVWXYZ_1234567890_user_qa_play')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Cenário 28 - Senha com mais de 100 caracteres', async ({page})=>{

  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('P@ssw0rd!ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#$_QaTest2026Secure')
  await page.locator('[data-test="login-button"]').click()
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')

})









