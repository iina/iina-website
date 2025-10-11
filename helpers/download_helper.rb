def filter(version_list, arch)
  supported = version_list.reject { |v| v.public_send(arch).to_s.empty? }
  result = []
  last_value = nil

  supported.each do |v|
    current_value = v.public_send(arch)
    next if current_value == last_value
    result << v
    last_value = current_value
  end

  result
end
