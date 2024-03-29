# Generated by Django 3.1.7 on 2021-03-16 16:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('final_price', models.IntegerField(verbose_name='Цена')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название категории')),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название товара')),
                ('slug', models.SlugField(unique=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Цена')),
                ('description', models.CharField(max_length=255, verbose_name='Описание')),
                ('image', models.ImageField(upload_to='', verbose_name='Изображение')),
                ('catergory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.category', verbose_name='Категория')),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=20, verbose_name='Телефон')),
                ('adress', models.CharField(max_length=255, verbose_name='Адрес')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
        ),
        migrations.CreateModel(
            name='CartProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qnty', models.PositiveIntegerField(default=1)),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Общая цена')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='realated_products', to='backend.cart', verbose_name='Корзина')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.product', verbose_name='Товар')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.customer', verbose_name='Покупатель')),
            ],
        ),
        migrations.AddField(
            model_name='cart',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.customer', verbose_name='Пользователь'),
        ),
        migrations.AddField(
            model_name='cart',
            name='products',
            field=models.ManyToManyField(blank=True, related_name='related_cart', to='backend.CartProduct'),
        ),
    ]
