const image = (photoId, width = 720) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`

export const categories = [
  {
    id: 'air-purifying',
    name: 'Air-Purifying Plants',
    description: 'Freshen your space with leafy natural filters.',
  },
  {
    id: 'low-maintenance',
    name: 'Low-Maintenance Plants',
    description: 'Easy-care favourites for a little everyday green.',
  },
  {
    id: 'decorative',
    name: 'Indoor Decorative Plants',
    description: 'Statement foliage to bring every room to life.',
  },
]

export const plants = [
  { id: 'snake-plant', name: 'Snake Plant', category: 'air-purifying', price: 499, description: 'Architectural upright leaves that thrive in almost any light.', image: image('photo-1593691509543-c55fb32e5cee') },
  { id: 'peace-lily', name: 'Peace Lily', category: 'air-purifying', price: 649, description: 'Elegant white blooms and glossy leaves for a calm corner.', image: image('photo-1593691509543-c55fb32e5cee') },
  { id: 'spider-plant', name: 'Spider Plant', category: 'air-purifying', price: 399, description: 'Cheerful arching foliage that is easy to share and grow.', image: image('photo-1572688484438-313a6e50c333') },
  { id: 'areca-palm', name: 'Areca Palm', category: 'air-purifying', price: 899, description: 'A soft, tropical canopy that brightens spacious interiors.', image: image('photo-1597055181300-a8f7fdb5b319') },
  { id: 'boston-fern', name: 'Boston Fern', category: 'air-purifying', price: 549, description: 'Feathery green fronds bring a lush, woodland feel indoors.', image: image('photo-1598880940080-ff9a29891b85') },
  { id: 'rubber-plant', name: 'Rubber Plant', category: 'air-purifying', price: 749, description: 'Bold, deep-green leaves make a striking natural feature.', image: image('photo-1501004318641-b39e6451bec6') },

  { id: 'zz-plant', name: 'ZZ Plant', category: 'low-maintenance', price: 599, description: 'Glossy stems that stay beautiful with minimal attention.', image: image('photo-1509423350716-97f9360b4e09') },
  { id: 'jade-plant', name: 'Jade Plant', category: 'low-maintenance', price: 349, description: 'A compact succulent with plump leaves and a sculptural shape.', image: image('photo-1509423350716-97f9360b4e09') },
  { id: 'aloe-vera', name: 'Aloe Vera', category: 'low-maintenance', price: 299, description: 'A sun-loving succulent with useful, fleshy leaves.', image: image('photo-1509423350716-97f9360b4e09') },
  { id: 'golden-pothos', name: 'Golden Pothos', category: 'low-maintenance', price: 379, description: 'Trailing heart-shaped leaves with a touch of golden variegation.', image: image('photo-1614594975525-e45190c55d0b') },
  { id: 'cast-iron-plant', name: 'Cast Iron Plant', category: 'low-maintenance', price: 699, description: 'Tough, handsome foliage made for busy plant parents.', image: image('photo-1501004318641-b39e6451bec6') },
  { id: 'lucky-bamboo', name: 'Lucky Bamboo', category: 'low-maintenance', price: 449, description: 'Graceful green stalks that add a serene touch to desks.', image: image('photo-1497250681960-ef046c08a56e') },

  { id: 'monstera', name: 'Monstera Deliciosa', category: 'decorative', price: 1099, description: 'Iconic split leaves create an instant tropical focal point.', image: image('photo-1614594975525-e45190c55d0b') },
  { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', category: 'decorative', price: 1499, description: 'Large violin-shaped leaves bring height and drama to a room.', image: image('photo-1509423350716-97f9360b4e09') },
  { id: 'calathea', name: 'Calathea Orbifolia', category: 'decorative', price: 899, description: 'Silvery striped leaves with a graceful, gentle movement.', image: image('photo-1598880940080-ff9a29891b85') },
  { id: 'anthurium', name: 'Red Anthurium', category: 'decorative', price: 799, description: 'Glossy foliage and vivid heart-shaped blooms add colour.', image: image('photo-1598880940080-ff9a29891b85') },
  { id: 'chinese-money-plant', name: 'Chinese Money Plant', category: 'decorative', price: 649, description: 'Distinctive coin-shaped leaves on a tidy, playful plant.', image: image('photo-1572688484438-313a6e50c333') },
  { id: 'bird-of-paradise', name: 'Bird of Paradise', category: 'decorative', price: 1799, description: 'Oversized paddle leaves make a bold, sunlit statement.', image: image('photo-1501004318641-b39e6451bec6') },
]

export const getPlantCategory = (categoryId) =>
  categories.find((category) => category.id === categoryId)?.name ?? categoryId

export const fallbackPlantImage = image('photo-1497250681960-ef046c08a56e')
