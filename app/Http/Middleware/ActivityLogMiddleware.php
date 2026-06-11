<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ActivityLogMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        app()->instance('ip_address', $request->ip());

        app()->instance(
            'user_agent',
            $request->userAgent()
        );

        return $next($request);
    }
}
