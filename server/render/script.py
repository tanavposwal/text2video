from manim import *

class Test(Scene):
    def construct(self):
        # Define the circle
        circle = Circle(radius=2, color=BLUE)
        self.play(Create(circle))

        # Define the square
        square = Square(side_length=3, color=GREEN)
        square.move_to(RIGHT * 3)
        self.play(Create(square))

        # Define the triangle
        triangle = Triangle(color=RED)
        triangle.move_to(LEFT * 3)
        self.play(Create(triangle))
        
        # Create a VGroup and shift it down
        group = VGroup(circle, square, triangle)
        self.play(group.animate.shift(DOWN))

        # Write some text
        text = Text("Manim is Awesome!", color=YELLOW)
        text.move_to(UP * 3)
        self.play(Write(text))
        
        #Transform circle into square
        self.play(Transform(circle,square))
        
        # Wait for a few seconds
        self.wait(2)

        # Fade out everything
        self.play(*[FadeOut(obj) for obj in self.mobjects])
        self.wait(1)
