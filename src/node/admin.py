from django.contrib import admin
from .models import UnChangeableInfo, ChangeableInfo


class UnChangeableInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'url', 'position_x', 'position_y', 'parent_node')


class ChangeableInfoAdmin(admin.ModelAdmin):
    list_display = ('node', 'user', 'proficiency')


admin.site.register(UnChangeableInfo, UnChangeableInfoAdmin)
admin.site.register(ChangeableInfo, ChangeableInfoAdmin)
