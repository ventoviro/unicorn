{{-- Part of earth project. --}}
<?php
$titleField = $titleField ?? 'title';
$aliasField = $aliasField ?? 'alias';

$field = $form->getField($titleField);

$end ??= \Windwalker\nope();
$slot ??= \Windwalker\nope();
?>
<div class="title-bar row form-horizontal">
    <div class="col-md-8">
        @if ($title = $form->getField($titleField))
             <x-field :field="$title" class="mb-3 row" input-class="input-lg form-control-lg"
                 label-class="col-md-3"
                 input-container-class="col"
            ></x-field>
        @endif

        @if ($alias = $form->getField($aliasField))
            <x-field :field="$alias" class="mb-3" input-class="input-sm form-control-sm"></x-field>
        @endif

        {!! $end(field: $field) ?? '' !!}

        {!! $slot(field: $field) !!}
    </div>
</div>
