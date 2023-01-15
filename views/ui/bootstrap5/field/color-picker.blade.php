<?php

declare(strict_types=1);

namespace App\View;

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

use Unicorn\Field\ColorPickerField;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;

/**
 * @var $field ColorPickerField
 */

$options = $field->getPickerOptions();
$options['locale'] ??= $app->service(LangService::class)->getLocale();

// if (str_starts_with($options['locale'], 'en')) {
//     unset($options['locale']);
// }

$app->service(\Unicorn\Script\FormScript::class)
    ->colorPicker('#' . $field->getId(), $options);

$input['data-role'] = 'color-text';
?>

{!! $input !!}
