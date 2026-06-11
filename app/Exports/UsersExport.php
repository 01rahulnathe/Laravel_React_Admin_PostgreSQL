<?php

namespace App\Exports;

use App\Models\UserProfile;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class UsersExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return UserProfile::select(
            'id',
            'name',
            'email',
            'status',
            'created_at'
        )->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Email',
            'Status',
            'Created At'
        ];
    }
}