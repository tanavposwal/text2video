from manim import *

class PolygonToCircle(Scene):
    def construct(self):
        # Create a polygon
        polygon = RegularPolygon(n=6, start_angle=PI/6)
        self.play(Create(polygon))
        self.wait(1)

        # Create a circle
        circle = Circle()
        circle.match_width(polygon)
        circle.move_to(polygon.get_center())

        # Transform the polygon into a circle
        self.play(Transform(polygon, circle))
        self.wait(2)

        #Morph back to polygon
        self.play(Transform(polygon, RegularPolygon(n=6, start_angle=PI/6).move_to(polygon.get_center()).match_width(circle)))
        self.wait(2)
        self.play(FadeOut(polygon))
        self.wait(1)
