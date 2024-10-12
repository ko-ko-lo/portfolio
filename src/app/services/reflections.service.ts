import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReflectionsService {
  private content = [
    {
      headline: 'Made of Stars, Dreams and Memories',
      thoughts: [
        "Within each of us, there is a vast universe - one filled with memories to tell, dreams we've fulfilled, and others we still hold close, waiting for the courage to bring them to life. There is a light that shines within, like stars, sometimes glowing brightly, and on other days, quietly. We carry both the known and the unknown - the dreams we are aware of, and the parts of ourselves yet to be uncovered.",
        "Where there is light, there is also darkness. We hold spaces within us that carry anger, disappointment, and wounds that may still need healing. But alongside these shadows, there is beauty - beauty that goes beyond society's standards, defined by the unique essence of our soul, the light that shines through our own universe.",
        "Discovering ourselves is a never-ending process. There is no final, finished version of who we are. The deeper we dig, the more we reveal. Keeping this in mind helps us stay humble and makes the journey itself more meaningful than any single destination. The act of self-awareness opens up an entire universe within, but it can also feel isolating at times. It's an uneasy, often uncomfortable path, but it's one that transforms us in profound ways.",
        "Exploring this inner world, with all its light and dark, is one of the bravest journeys we can take. It takes courage to pause and listen to ourselves, to our thoughts, to dig deeper into both the darkness and the light. But in doing so, we uncover the richness of who we are - a never-ending story of discovery, one that leads us to understand ourselves more fully with each step. It's in this exploration that we truly learn.",
      ],
      image: '/art/universe.jpg',
    },
    {
      headline: 'The Courage to Follow Your Heart',
      thoughts: [
        "Stand strong in your beliefs, and be courageous in following your own path. Sometimes, you'll make choices that feel right to you, even when others may not understand.",
        "As a child, I chose not to eat meat out of a deep love for animals. It was a decision that felt natural to me, but it wasn't always easy for those around me to accept. Many didn't understand, and their discomfort often led to challenging reactions.",
        'Over time, I realized that this choice not only shaped who I am, but also expanded my empathy. It taught me to think beyond the boundaries set by others, to question norms, and to approach the world with an open heart. Yet, it also brought moments of grief, as I struggled to reconcile my love for animals with the reality of a society that often chooses to harm them.',
        "Today, I see how perspectives have shifted, and the lifestyle I once had to defend is now seen by many as positive. Along this journey, I've come to understand that most people are on their own path of learning and growth.",
        'Being different can bring challenges, but it also has the power to create a more compassionate and thoughtful world.',
      ],
      image: '/art/brave.jpg',
    },
    {
      headline: 'Walking New Paths',
      thoughts: [
        "Walking new paths requires a certain kind of bravery. At first, the challenges might seem larger than they truly are, but it's through taking that first step that you realize they are part of the journey. There is no right or wrong path - only the one you are willing to discover. Staying where you are is always easier, but stepping onto a new path invites growth, curiosity, and a deeper connection to life, nature, others and yourself.",
        "To walk a new path is to question what you know, to break free from imitation, and to create your own way forward. It's like jumping into cold water - it awakens something within you, making you see the world with clearer, refreshed eyes. There's a sense of shock, but also a deep feeling of being alive. And through that, you learn. You learn about yourself, about how to navigate life's uncertainties, and you begin to see the world in ways you never did before.",
        "In connecting with new experiences, you may lose some of the familiar connections. Not everyone will want to walk the same path, and that's okay. Many prefer the comfort of the known, and their conversations or mindset may no longer align with yours. It's not about judgment, but about the natural differences that arise when you choose to explore new ground. Sometimes, people may even envy the courage it takes to venture beyond the familiar.",
        "Walking a new path is a journey of discovery, not only of the world around you, but also of yourself. It's a reminder that life's richest experiences often come from the courage to step into the unknown.",
      ],
      image: '/art/paths.jpg',
    },
    {
      headline: 'The Weight of Thoughts',
      thoughts: [
        "Our thoughts have a powerful influence on how we see ourselves and the world. Sometimes, it's easy to wonder - do our thoughts define who we are? If our thoughts change, perhaps due to outside influences or circumstances, are we still the same person? It can feel unsettling to realize just how much our identity seems tied to the mind.",
        "When negative thoughts take over, pulling us down into difficult places, it's natural to question what they say about us. Does having negative thoughts make us a negative person? Are we defined by the moments when our mind feels heavy with doubt or sadness?",
        "In truth, we are more than our thoughts. While they shape our experience, they don't define the whole of who we are. Even in times when negativity seems to dominate, we know that positive thoughts can help us find our way back to balance. But just as the sun needs the moon, our negative thoughts are part of us, too. Trying to force only positivity can leave us feeling more lost. It's the dance between positive and negative - like yin and yang - that helps us truly understand ourselves.",
        'Embracing both sides of our mind allows us to be whole. In the light and the shadow of our thoughts, we find a deeper understanding of who we are.',
      ],
      image: '/art/thoughts.jpg',
    },
    {
      headline: 'Silence Brings Peace',
      thoughts: [
        "Being surrounded by people all day can sometimes feel overwhelming. There's a part of us that longs to retreat, to withdraw inward, while another part wants to connect and be seen. This can create a quiet contradiction within, making it difficult to truly be ourselves. When we spend too much time in superficial interactions, we can start to feel disconnected, not only from others but from ourselves. Without deeper, meaningful connections, a sense of loneliness can settle in.",
        "Sometimes, the presence of others can leave us feeling unsettled. When this happens, it's easy to lose our inner balance and feel adrift, even in a crowd. It's in these moments that silence becomes a refuge. In silence, we find the space to reconnect with ourselves, to calm the mind, and to restore our sense of balance. It helps reduce the stress that builds up and allows us to experience peace, a peace that is deeply rooted in being alone without feeling lonely.",
        'Silence, whether found in meditation, yoga, or simply sitting in stillness, offers us the gift of clarity and calm, a return to ourselves when the world feels overwhelming.',
      ],
      image: '/art/silence.jpg',
    },
    {
      headline: 'Broken Yet Whole',
      thoughts: [
        "Sometimes, it feels like we're holding together the pieces of ourselves, like fragile glass we're trying to keep from shattering. We're imperfect, we're a little chaotic, and we're always in the process of working on ourselves. There's insecurity, fear, and moments when discomfort makes us say or do things that don't truly come from the heart. We can feel lost, torn between loving ourselves and struggling with self-doubt.",
        "We are strong, because life has required us to be. Yet, there's a deep longing to let go, to lean on someone, to feel safe enough to be weak. Not because we need saving, but simply because we want someone to be there, to witness our vulnerability and accept us as we are.",
        "There's often a sense that something is missing, a feeling of incompleteness. We crave love and connection, and that's okay—it's part of being human. Inside, there's both clarity and chaos, and we don't need to be perfect. In fact, we never will be, and that's part of our journey.",
        'What if we could embrace our vulnerability as much as we embrace our strength? To accept the parts of ourselves that feel weak or uncertain, just as we do the parts that are resilient and brave. Maybe then we would find that we are not broken, but whole in our imperfection.',
      ],
      image: '/art/pain.jpg',
    },
    {
      headline: 'A Reflection on Compassion for All Animals',
      thoughts: [
        'Would you love your cat just as much if she looked like a cow? All animals are living beings with their own thoughts, feelings, and desires. Each one deserves to live free from pain and suffering. A cat is no more valuable or important than a cow - so why do we cherish one and allow the other to suffer?',
        "As a child, I formed a deep connection with animals and nature. I loved cats and dogs, but I also found comfort in the gentle presence of cows, with their soft brown eyes and calm souls. I didn't see any difference between the animals we kept as pets and those raised for food. Even then, I was aware of the suffering animals endured - long transport, cruel conditions - and I couldn't understand why society treated pets like royalty but didn't seem to care about the animals they ate.",
        "I don't believe everyone has to follow the same path, but I do believe the way we treat animals in our society is often harsh and lacks compassion. We place different values on animals based on culture and habit, but that doesn't mean their lives matter any less.",
        'During my time in India, I saw firsthand how cows are revered and respected in a way similar to how we care for cats and dogs. It made me reflect on how our cultural values shape how we view and treat animals, and how, perhaps, there is space to treat all living beings with the same kindness and respect.',
      ],
      image: '/art/cat.jpg',
    },
    {
      headline: 'Imagination Can Travel Anywhere',
      thoughts: [
        'Imagination is a remarkable gift - it can take us anywhere, at any time. When something is missing in our lives, we can imagine it. When times are hard, we can picture a life where things are better. These imaginary worlds we create can be intricate, filled with conversations, trust, and intimacy, or they can be as simple as a comforting meal or a peaceful place. In these worlds, we are loved and accepted, just as we are.',
        "Even though we know these imaginary worlds are not reality, they give us comfort. They allow us to cope, and in many ways, they help us survive. Imagination can carry through dark times. Whether we've been stuck in difficult circumstances, dependent on someone, or struggling with our own minds, sometimes escaping into the imagination is the only way to endure.",
        'We can consciously use our imagination to navigate tough moments. The goal  is to one day create a reality where there is no longer the need to escape into our minds. But until then, imagination will always be there - a place where we can travel, find comfort, and experience a world where we are free.',
      ],
      image: '/art/imagination.jpg',
    },
    {
      headline: 'Creating Light from Darkness',
      thoughts: [
        "Sometimes, the most profound creativity is born from the heaviest and darkest places within us. When the mind feels heavy, when we are alone, that's often when ideas start to find their way out - searching for light, seeking expression. It's during these moments of darkness that art becomes a way to bring beauty into the world and to make sense of the feelings we carry inside.",
        "Before the process begins, there's often just a vision, a vague image, or a message that's difficult to put into words. As the artwork starts to take shape, the idea slowly transforms, moving from the world of thoughts into something tangible, something we can see and feel. This process of creation is not just about making art, it's a journey back to ourselves.",
        "Through art, we find peace, a deep connection with our soul. It's a way of gently guiding ourselves out of the darkness. The process itself brings calm, contentment, and sometimes even joy. Each stroke, each moment spent creating, is a way of coming to terms with who we are, finding light where there once was none.",
        "Art is not just the final product - it's the journey that helps us heal and understand ourselves, especially when we need it most.",
      ],
      image: '/art/darkness.jpg',
    },
  ];

  getContent() {
    return this.content;
  }
}
