const workoutData = {
  exercise: [
    {
      id: 1,
      name: 'bench press',
      equipment: 'barbell',
      body_group: 'chesticles',
      description:
        'While laying on a bench, press the barbell up from your chest',
      images: [],
    },
    {
      id: 2,
      name: 'squat',
      equipment: 'barbell',
      body_group: 'legs',
      description:
        'Drop that butt to the ground, safely of course with proper form and only as far as your body can handle',
      images: [],
    },
  ],
  workout: [
    {
      id: 1,
      user_id_created: 1,
      name: 'Mourning routine',
      type: 'legs',
      popularity_score: '900',
      likes: 420,
    },
    {
      id: 2,
      user_id_created: 1,
      name: 'Curl\'s for the girls',
      type: 'arms',
      popularity_score: '500',
      likes: 666,
    }
  ],
  workout_exersice: [
    {
      id: 1,
      workout_id: 1,
      exersise_id: 1,
      set_count: 2,
      rep_range: 50
    },
    {
      id: 2,
      workout_id: 2,
      exersise_id: 2,
      set_count: 4,
      rep_range: 25
    },
  ],
};

module.exports = workoutData