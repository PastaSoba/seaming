from rest_framework import serializers
from node.models import ChangeableInfo, UnChangeableInfo


class UserNodeListSerializer(serializers.ModelSerializer):
    """特定ユーザのノードの詳細を返すためのシリアライザ"""

    user_name = serializers.ReadOnlyField(source='user.username')
    node_name = serializers.ReadOnlyField(source='node.name')
    node_description = serializers.ReadOnlyField(source='node.description')
    node_url = serializers.ReadOnlyField(source='node.url')
    node_position_x = serializers.ReadOnlyField(source='node.position_x')
    node_position_y = serializers.ReadOnlyField(source='node.position_y')

    class Meta:
        model = ChangeableInfo
        fields = ['user_name', 'node_name', 'node_description', 'node_url', 'node_position_x', 'node_position_y', 'proficiency']


class NodeSerializer(serializers.ModelSerializer):
    """特定ノードの詳細情報を返すためのシリアライザ"""

    class Meta:
        model = UnChangeableInfo
        fields = ['name', 'description', 'url']


class RecursiveField(serializers.Serializer):
    """再帰で使用。どんな仕組みかは分からない"""
    # https://www.django-rest-framework.org/api-guide/relations/#custom-relational-fields
    # を参照

    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class RecursiveNodeSerializer(serializers.ModelSerializer):
    unchangeableinfo_set = RecursiveField(many=True)
    details = serializers.HyperlinkedIdentityField(
        view_name='detail-url'
    )

    class Meta:
        model = UnChangeableInfo
        fields = ['name', 'position_x', 'position_y', 'details', 'unchangeableinfo_set']
