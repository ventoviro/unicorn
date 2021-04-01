<?php
/**
 * Part of Phoenix project.
 *
 * @copyright  Copyright (C) 2011 - 2014 SMS Taiwan, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 */

namespace Unicorn\Selector\Filter;

use Windwalker\Query\Query;

/**
 * The filter helper interface.
 *
 * @since 1.0
 */
interface FilterHelperInterface
{
    /**
     * Set filter handler. Can be a callback or closure.
     *
     * Example:
     * ``` php
     * function(Query $query, $field, $value)
     * {
     *     return $query->where($field . ' <= ' . $value);
     * }
     * ```
     *
     * @param  string         $name     The handler name.
     * @param  callable|bool  $handler  Handler callback.
     *
     * @return  FilterHelperInterface Return self to support chaining.
     */
    public function addHandler(string $name, callable|bool $handler): static;

    /**
     * Execute the filter and add in query object.
     *
     * @param Query $query Db query object.
     * @param array $data  The data from request.
     *
     * @return  Query Return the query object.
     */
    public function process(Query $query, array $data = []): Query;
}
