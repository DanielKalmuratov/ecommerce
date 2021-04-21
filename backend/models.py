from django.db import models
from django.contrib.auth import get_user_model


class User(models.Model):
    name = models.CharField(max_length=255, verbose_name='Имя')
    second_name = models.CharField(max_length=255, verbose_name='Фамилия')
    email = models.CharField(max_length=100, verbose_name='Email')
    password = models.CharField(max_length=100, verbose_name='Password')
    address = models.CharField(max_length=255, verbose_name='Адрес')

    def __str__(self):
        return self.name

# Category +
# Product +
# Cart +
# CartProduct +
# Order
# Customer +


class Category(models.Model):

    name = models.CharField(max_length=255, verbose_name='Название категории')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):

    catergory = models.ForeignKey(
        Category, verbose_name='Категория', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Название товара')
    slug = models.SlugField(unique=True)
    price = models.DecimalField(
        max_digits=9, decimal_places=2, verbose_name='Цена')
    description = models.CharField(max_length=255, verbose_name='Описание')
    image = models.ImageField(verbose_name='Изображение', blank=False)

    def __str__(self):
        return self.title


class Cart(models.Model):

    owner = models.ForeignKey(
        'Customer', verbose_name='Пользователь', on_delete=models.CASCADE)
    products = models.ManyToManyField(
        'CartProduct', blank=True, related_name='related_cart')

    final_price = models.IntegerField(verbose_name='Цена')

    def __str__(self):
        return str(self.id)


class CartProduct(models.Model):

    user = models.ForeignKey(
        'Customer',  verbose_name='Покупатель', on_delete=models.CASCADE)
    cart = models.ForeignKey(
        'Cart', verbose_name='Корзина', on_delete=models.CASCADE, related_name='realated_products')
    product = models.ForeignKey(
        Product, verbose_name='Товар', on_delete=models.CASCADE)
    qnty = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(
        max_digits=9, decimal_places=2, verbose_name='Общая цена')

    def __str__(self):
        return 'Продукт : {} (для корзины)'.format(self.product.title)


class Customer(models.Model):

    user = models.ForeignKey(
        User, verbose_name='Пользователь', on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, verbose_name='Телефон')
    adress = models.CharField(max_length=255, verbose_name='Адрес')

    def __str__(self):
        return 'Пользователь {} : {}'.format(self.user.name, self.user.second_name)
