# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-08 19:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=60)),
                ('activo', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name_plural': 'Categorias',
                'verbose_name': 'Categoria',
            },
        ),
    ]
