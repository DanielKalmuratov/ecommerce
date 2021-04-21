from django.urls import path
from rest_framework import routers
from django.contrib.auth.models import User

from .views import CategoryVewSet, ProductVewSet, CartVewSet, CartProductVewSet, CustomerVewSet, UserVewSet


router = routers.SimpleRouter()
router.register('products', ProductVewSet, basename='products')
router.register('category', CategoryVewSet, basename='category')
router.register('cart', CartVewSet, basename='cart')
router.register('cart_product', CartProductVewSet, basename='cart_product')
router.register('customer', CustomerVewSet, basename='customer')
router.register('user', UserVewSet, basename='user')


urlpatterns = []

urlpatterns += router.urls
