<?php

namespace App\Http\Requests\ToDoDetail;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'completed_flag' => 'required|boolean'
        ];
    }
}
