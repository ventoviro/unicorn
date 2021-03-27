<?php
/**
 * Part of phoenix project.
 *
 * @copyright  Copyright (C) 2016 LYRASOFT. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

namespace Unicorn\Legacy\Html\State;

use Windwalker\Core\Renderer\RendererService;
use Windwalker\Utilities\Arr;

/**
 * The StateButton class.
 *
 * @since  1.1
 */
class IconButton
{
    /**
     * Property row.
     *
     * @var  int
     */
    protected int $row = 0;

    /**
     * Property value.
     *
     * @var  mixed
     */
    protected mixed $value;

    /**
     * Property states.
     *
     * @var  array
     */
    protected array $states = [
        '_default' => [
            'value' => '_default',
            'task' => '',
            'icon' => 'fa fa-fw fa-question-circle',
            'title' => 'Unknown state',
            'only_icon' => false,
            'disabled' => null,
            'options' => [
                'button_color' => 'btn-default btn-light btn-sm',
                'text' => null,
                'text_color' => null,
            ],
        ],
    ];

    /**
     * Property options.
     *
     * @var  array
     */
    protected array $options = [];

    /**
     * Property template.
     *
     * @var  string
     */
    protected string $template = 'unicorn.grid.table.icon-button';

    /**
     * create
     *
     * @param array $options
     *
     * @return static
     */
    public static function create(array $options = []): static
    {
        return new static($options);
    }

    /**
     * StateButton constructor.
     *
     * @param  RendererService  $rendererService
     * @param  array            $options
     *
     */
    public function __construct(protected RendererService $rendererService, array $options = [])
    {
        $this->options = $options;

        $this->init();
    }

    /**
     * configure
     *
     * @return  void
     */
    protected function init()
    {
        // Implement this method.
    }

    /**
     * addState
     *
     * @param string|integer $value
     * @param string         $task
     * @param string         $icon
     * @param null           $title
     * @param bool           $onlyIcon
     * @param array          $options
     *
     * @return static
     */
    public function addState($value, $task, $icon = 'ok', $title = null, $onlyIcon = null, $options = [])
    {
        // Force type to prevent null data
        $this->states[$value] = [
            'value' => (string) $value,
            'task' => (string) $task,
            'icon' => (string) $icon,
            'title' => (string) $title,
            'only_icon' => (bool) $onlyIcon,
            'options' => $options,
        ];

        return $this;
    }

    /**
     * getState
     *
     * @param   string|integer $value
     *
     * @return  array
     */
    public function getState($value)
    {
        return isset($this->states[$value]) ? $this->states[$value] : null;
    }

    /**
     * removeState
     *
     * @param   string|integer $value
     *
     * @return  static
     */
    public function removeState($value)
    {
        if (isset($this->states[$value])) {
            unset($this->states[$value]);
        }

        return $this;
    }

    /**
     * render
     *
     * @param  mixed   $value
     * @param  integer $row
     * @param array    $options
     *
     * @return string
     */
    public function render($value = null, $row = null, array $options = [])
    {
        $default = $this->getState($value);

        $default = $default ?: $this->getState('_default');

        $default = Arr::mergeRecursive(
            $this->getState('_default'),
            $default,
            $this->options,
            $options
        );

        $default['row'] = (int) $row;

        return WidgetHelper::render($this->template, $default, WidgetHelper::EDGE);
    }

    /**
     * __toString
     *
     * @return  string
     */
    public function __toString()
    {
        try {
            return $this->render();
        } catch (\Exception $e) {
            return (string) $e;
        } catch (\Throwable $e) {
            return (string) $e;
        }
    }

    /**
     * Method to get property Template
     *
     * @return  string
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * Method to set property template
     *
     * @param   string $template
     *
     * @return  static  Return self to support chaining.
     */
    public function setTemplate($template)
    {
        $this->template = $template;

        return $this;
    }

    /**
     * Method to get property Value
     *
     * @return  mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Method to set property value
     *
     * @param   mixed $value
     *
     * @return  static  Return self to support chaining.
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * Method to get property Row
     *
     * @return  int
     */
    public function getRow()
    {
        return $this->row;
    }

    /**
     * Method to set property row
     *
     * @param   int $row
     *
     * @return  static  Return self to support chaining.
     */
    public function setRow($row)
    {
        $this->row = $row;

        return $this;
    }

    /**
     * Method to get property Options
     *
     * @return  array
     */
    public function getOptions()
    {
        return $this->options;
    }

    /**
     * Method to set property options
     *
     * @param   array $options
     *
     * @return  static  Return self to support chaining.
     */
    public function setOptions(array $options)
    {
        $this->options = $options;

        return $this;
    }
}
