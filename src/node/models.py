from django.db import models
from django.contrib.auth import models as auth_models


class UnChangeableInfo(models.Model):
    """
    ノード情報の中でユーザごとに変化しないもの
    （不可変データ担当）
    """

    class Meta:
        db_table = 'unchangeable_info'

    name = models.CharField(verbose_name='ノードの名前', max_length=30)
    description = models.CharField(verbose_name='ノードの説明', max_length=200)
    url = models.URLField(verbose_name='教材サイトのURL')

    position_x = models.IntegerField(verbose_name='ノードのx座標', default=0)
    position_y = models.IntegerField(verbose_name='ノードのy座標', default=0)

    parent_node = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.name


class ChangeableInfo(models.Model):
    """
    ノード情報の中でユーザごとに変化するもの
    （可変データ担当）
    """

    class Meta:
        db_table = 'changeable_info'

    node = models.ForeignKey(UnChangeableInfo, on_delete=models.CASCADE)
    user = models.ForeignKey(auth_models.User, on_delete=models.CASCADE)
    proficiency = models.IntegerField(verbose_name="スキルの習熟度", default=0)

    def __str__(self):
        return ("n: {}, u: {}".format(self.node, self.user))
