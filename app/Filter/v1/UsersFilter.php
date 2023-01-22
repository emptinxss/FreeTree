<?php

namespace App\Filter\v1;

use Illuminate\Http\Request;

class UsersFilter
{
    protected $safeParams = [
        'name' => ['eq']
    ];
    protected $columnMap = [

        'name' => 'name',

    ];
    protected $operatorMap = [
        'eq' => '=',

    ];

    public function transform(Request $request)
    {
        $eloQuery = [];

        foreach ($this->safeParams as $parm => $operators) {
            $query = $request->query($parm);

            if (!isset($query)) {
                continue;
            }

            $column = $this->columnMap[$parm] ?? $parm;

            foreach ($operators as $operator) {
                if (isset($query[$operator])) {
                    $eloQuery[] = [$column, $this->operatorMap[$operator], $query[$operator]];
                }
            }
        }
        return $eloQuery;
    }
}
