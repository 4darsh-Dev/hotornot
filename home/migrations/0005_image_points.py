# Generated by Django 4.1.7 on 2023-04-05 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_image_date_created_image_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='points',
            field=models.IntegerField(default=0),
        ),
    ]
