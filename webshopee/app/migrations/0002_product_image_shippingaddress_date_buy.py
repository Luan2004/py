# Generated by Django 4.2.6 on 2023-11-16 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='date_buy',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
