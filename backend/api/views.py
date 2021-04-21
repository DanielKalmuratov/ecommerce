from rest_framework import viewsets
from .serializers import CategorySerializer, ProductSerializer, CustomerSerializer, CartSerializer, CartProductSerializer, UserSerializer
from ..models import Category, Product, Cart, CartProduct, Customer, User


class UserVewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer


class CategoryVewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductVewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CartVewSet(viewsets.ModelViewSet):

    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartProductVewSet(viewsets.ModelViewSet):

    queryset = CartProduct.objects.all()
    serializer_class = CartProductSerializer


class CustomerVewSet(viewsets.ModelViewSet):

    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
