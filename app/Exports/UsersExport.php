<?php

namespace App\Exports;

use App\Models\UserProfile;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class UsersExport implements FromCollection, ShouldAutoSize, WithHeadings
{
    public function collection()
    {
        return UserProfile::get()->map(function ($user) {
            return [
                $user->id,
                $user->name,
                $user->email,
                $user->status == 1
                    ? 'Active'
                    : 'Inactive',
                $user->created_at ? $user->created_at->format('Y-m-d') : 'N/A',
            ];
        });
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Email',
            'Status',
            'Created At',
        ];
    }
}
