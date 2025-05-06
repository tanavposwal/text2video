from manim import *

class HelloCircle(Scene):
    def construct(self):
        circle = Circle(radius=2, color=BLUE)
        text = Text("Hello", font_size=48)
        text.move_to(circle.get_center())

        self.play(Create(circle))
        self.play(Write(text))
        self.wait(1)

        # Animate the text moving around the circle
        self.play(
            text.animate.move_to(circle.point_from_proportion(0)),
            run_time=1
        )
        self.play(
            text.animate.move_to(circle.point_from_proportion(0.25)),
            run_time=1
        )
        self.play(
            text.animate.move_to(circle.point_from_proportion(0.5)),
            run_time=1
        )
        self.play(
            text.animate.move_to(circle.point_from_proportion(0.75)),
            run_time=1
        )
        self.play(
            text.animate.move_to(circle.point_from_proportion(1)),
            run_time=1
        )
        self.wait(1)
        self.play(FadeOut(circle, text))
        self.wait(1)
