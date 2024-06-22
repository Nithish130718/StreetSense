from Node import Node


class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def __repr__(self):
        current = self.head
        nodes = []
        while current:
            nodes.append(str(current.data))
            current = current.next
        return " -> ".join(nodes)
