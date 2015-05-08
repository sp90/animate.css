#NEW FEATURE
Include keyframe once, dont think about implimenting keyframes yourself, just add them trough the mixin and it takes care of the rest.

#How to include

A simple way to include a animation from the library, it uses the original naming conventions with camalCasing all animations from the original library is included as mixins.

    .your-element {
      @include animate-embed(bounce);
    }

Remember it needs to have dimentions

To impliment keyframes set them inside: used-animations and only include then once you use. That way you minimize the code in your project.
