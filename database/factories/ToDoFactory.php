<?php

namespace Database\Factories;

use App\Models\ToDo;
use Illuminate\Database\Eloquent\Factories\Factory;

class ToDoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
        ];
    }
}
