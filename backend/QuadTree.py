from geopy.geocoders import Nominatim
from Linked_List import LinkedList


class Point:
    def __init__(self, latitude, longitude, data=None, traffic=0):
        self.latitude = latitude
        self.longitude = longitude
        self.data = data
        self.traffic = traffic


class Rectangle:
    def __init__(self, center_latitude, center_longitude, width, height):
        self.center_latitude = center_latitude
        self.center_longitude = center_longitude
        self.width = width
        self.height = height

    def contains(self, point):
        return (
            self.center_latitude - self.width
            <= point.latitude
            < self.center_latitude + self.width
        ) and (
            self.center_longitude - self.height
            <= point.longitude
            < self.center_longitude + self.height
        )

    def intersects(self, other_rectangle):
        return not (
            other_rectangle.center_latitude - other_rectangle.width
            > self.center_latitude + self.width
            or other_rectangle.center_latitude + other_rectangle.width
            < self.center_latitude - self.width
            or other_rectangle.center_longitude - other_rectangle.height
            > self.center_longitude + self.height
            or other_rectangle.center_longitude + other_rectangle.height
            < self.center_longitude - self.height
        )


class QuadTree:
    def __init__(self, boundary, capacity):
        self.boundary = boundary
        self.capacity = capacity
        self.points = []
        self.divided = False

    def subdivide(self):
        center_latitude = self.boundary.center_latitude
        center_longitude = self.boundary.center_longitude
        half_width = self.boundary.width / 2
        half_height = self.boundary.height / 2

        ne = Rectangle(
            center_latitude + half_width,
            center_longitude - half_height,
            half_width,
            half_height,
        )
        self.northeast = QuadTree(ne, self.capacity)
        nw = Rectangle(
            center_latitude - half_width,
            center_longitude - half_height,
            half_width,
            half_height,
        )
        self.northwest = QuadTree(nw, self.capacity)
        se = Rectangle(
            center_latitude + half_width,
            center_longitude + half_height,
            half_width,
            half_height,
        )
        self.southeast = QuadTree(se, self.capacity)
        sw = Rectangle(
            center_latitude - half_width,
            center_longitude + half_height,
            half_width,
            half_height,
        )
        self.southwest = QuadTree(sw, self.capacity)

        self.divided = True

    def insert(self, point):
        if not self.boundary.contains(point):
            return False

        if len(self.points) < self.capacity:
            self.points.append(point)
            return True
        else:
            if not self.divided:
                self.subdivide()

            if self.northeast.insert(point):
                return True
            elif self.northwest.insert(point):
                return True
            elif self.southeast.insert(point):
                return True
            elif self.southwest.insert(point):
                return True

    def query(self, search_range, found):
        if not self.boundary.intersects(search_range):
            return found

        for p in self.points:
            if search_range.contains(p):
                found.append(p)

        if self.divided:
            self.northwest.query(search_range, found)
            self.northeast.query(search_range, found)
            self.southwest.query(search_range, found)
            self.southeast.query(search_range, found)

        return found
