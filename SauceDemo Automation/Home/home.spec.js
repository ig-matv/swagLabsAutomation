// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/')

    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
})
test('Validar carregamento da página de produtos',async({page})=>{
     await expect(page).toHaveTitle(/Swag Labs/)
})
test('Validar quantidade de produtos exibidos',async({page})=>{

    const produtos = page.locator('[data-test="inventory-item-description"]')

    await expect(produtos).toHaveCount(6);
})
test('Adicionar um produto ao carrinho',async({page})=>{
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove')
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1')
})
test('Adicionar múltiplos produtos ao carrinho',async({page})=>{
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2')
})
test('Remover produto diretamente da home',async({page})=>{
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toHaveText('Add to cart')
})
test('Ordenar produtos por nome de A a Z',async({page})=>{
    await page.locator('[data-test="product-sort-container"]').click()
    await page.getByText('Name (A to Z)Name (A to Z)').click()
    await page.locator('[data-test="product-sort-container"]').selectOption('az');
})
test('Ordenar produtos por nome de Z a A',async({page})=>{
    await page.locator('[data-test="product-sort-container"]').click()
    await page.getByText('Name (A to Z)Name (A to Z)').click()
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
})
test('Ordenar produtos pelo menor preço',async({page})=>{
    await page.locator('[data-test="product-sort-container"]').click()
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi')
})
test('Ordenar produtos pelo maior preço',async({page})=>{
    await page.locator('[data-test="product-sort-container"]').click()
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo')
})
test('Acessar o carrinho pela home',async({page})=>{
    await page.locator('[data-test="shopping-cart-link"]').click()
    await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart')
})
