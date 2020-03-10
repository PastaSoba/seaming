from rest_framework import serializers
from node.models import ChangeableInfo


class NodeSerializer(serializers.ModelSerializer):
    """ノードの詳細を返すためのシリアライザ"""

    user_name = serializers.ReadOnlyField(source='user.username')
    node_name = serializers.ReadOnlyField(source='node.name')
    node_description = serializers.ReadOnlyField(source='node.description')
    node_url = serializers.ReadOnlyField(source='node.url')
    node_position_x = serializers.ReadOnlyField(source='node.position_x')
    node_position_y = serializers.ReadOnlyField(source='node.position_y')

    class Meta:
        model = ChangeableInfo
        fields = ['user_name', 'node_name', 'node_description', 'node_url', 'node_position_x', 'node_position_y', 'proficiency']
