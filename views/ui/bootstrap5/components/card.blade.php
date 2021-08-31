<?php

/**
 * Global variables
 * --------------------------------------------------------------
 * @var $app       AppContext      Application context.
 * @var $vm        object          The view model object.
 * @var $uri       SystemUri       System Uri information.
 * @var $chronos   ChronosService  The chronos datetime service.
 * @var $nav       Navigator       Navigator object to build route.
 * @var $asset     AssetService    The Asset manage service.
 * @var $lang      LangService     The language translation service.
 */

declare(strict_types=1);

use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;

/** @var \Windwalker\Edge\Component\ComponentAttributes $attributes */
$attributes = $attributes->class('card');
?>

<div {!! $attributes !!}>
    @if ($header ?? null)
        {!! $header(headerClass: $headerClass ?? '') !!}
    @elseif ($title ?? null)
        <div class="card-header {{ $headerClass ?? '' }}">
            {!! $title ?? '' !!}
        </div>
    @endif

    @if ($start ?? null)
        {!! $start() !!}
    @endif

    @if ($body ?? null)
        {!! $body(bodyClass: $bodyClass) !!}
    @else
        @if ($slot ?? null)
            <div class="card-body {{ $bodyClass ?? '' }}">
                {!! $slot !!}
            </div>
        @endif
    @endif

    @if ($end ?? null)
        {!! $end() !!}
    @endif

    @if ($footer ?? null)
        {!! $footer(footerClass: $footerClass ?? '') !!}
    @elseif ($footerTitle ?? null)
        <div class="card-footer {{ $footerClass ?? '' }}">
            {!! $footerTitle ?? '' !!}
        </div>
    @endif
</div>
