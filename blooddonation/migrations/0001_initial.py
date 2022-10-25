# Generated by Django 4.1.2 on 2022-10-04 19:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Donor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=15)),
                ('last_name', models.CharField(max_length=15)),
                ('address', models.TextField()),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=10)),
                ('age', models.IntegerField()),
                ('blood_type', models.CharField(max_length=15)),
                ('last_time_donated', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateField()),
                ('time', models.TimeField()),
                ('title', models.CharField(max_length=30)),
                ('message', models.CharField(max_length=250)),
                ('recipient', models.CharField(max_length=40)),
                ('origin', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='blooddonation.donor')),
            ],
        ),
    ]
