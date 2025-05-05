from manim import *

class Test(Scene):
    def construct(self):
        # Create a simple graph
        axes = Axes(
            x_range=[0, 5, 1],
            y_range=[0, 5, 1],
            x_length=5,
            y_length=5,
            axis_config={"include_numbers": True},
        )
        labels = axes.get_axis_labels(x_label="x", y_label="f(x)")

        # Define a function
        def func(x):
            return 0.5 * (x**2)

        # Create the graph of the function
        graph = axes.plot(func, x_range=[0, 4], color=BLUE)

        # Create a dot on the graph
        dot = Dot(axes.c2p(2, func(2)), color=RED)

        # Create a label for the dot
        dot_label = MathTex("(2, f(2))", color=RED).next_to(dot, UP)

        # Group the graph, dot, and label
        group = VGroup(axes, labels, graph, dot, dot_label)

        # Play the animation
        self.play(Create(axes), Write(labels))
        self.play(Create(graph))
        self.play(FadeIn(dot), Write(dot_label))
        self.wait(2)
        self.play(group.animate.shift(LEFT * 3))

        # Create a square
        square = Square(side_length=2, color=GREEN).shift(RIGHT * 3)

        # Write some text
        text = Text("Hello, Manim!", color=WHITE).next_to(square, UP)

        # Play the animation
        self.play(Create(square), Write(text))
        self.wait(2)

        # Transform the square into a circle
        circle = Circle(radius=1, color=YELLOW).shift(RIGHT * 3)
        self.play(Transform(square, circle))
        self.wait(2)

        # Fade out everything
        self.play(*[FadeOut(mob) for mob in self.mobjects])
        self.wait(1)
