from django.db import models

# Create your models here


class Categoria(models.Model):

    nombre = models.CharField(max_length=60)
    activo = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nombre
