package com.tjfaccipieri.acnh_companion.security;

import com.tjfaccipieri.acnh_companion.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class UserDetailsImpl implements UserDetails {
  
  private static final long serialVersionUID = 1L;
  
  private String userName;
  private String password;
  private List<GrantedAuthority> authorities;
  
  public UserDetailsImpl(User user) {
    this.userName = user.getUsername();
    this.password = user.getPassword();
  }

  public UserDetailsImpl() {}
  
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }
  
  @Override
  public String getPassword() {
    System.out.println(password);
    return password;
  }
  
  @Override
  public String getUsername() {
    return userName;
  }
  
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }
  
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }
  
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }
  
  @Override
  public boolean isEnabled() {
    return true;
  }
}
